import { useState } from "react";
import { FaBars, FaTh, FaTshirt, FaList, FaCubes, FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 

const Sidebar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <div className={`d-flex flex-column p-3 bg-dark text-white ${isCollapsed ? "collapsed" : ""}`} 
         style={{ width: isCollapsed ? "50px" : "250px", height: "100vh", transition: "width 0.3s" }}>
      
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        {!isCollapsed && <h5 className="fw-bold"><FaShoppingCart className="text-warning me-2" /> Larkon</h5>}
        <FaBars className="text-white" style={{ cursor: "pointer" }} onClick={() => setCollapsed(!isCollapsed)} />
      </div>

    
      <ul className="list-unstyled">
        
       
        <li className="mb-3">
          <FaTh className="me-2 text-warning" /> {!isCollapsed && <span>Dashboard</span>}
        </li>

        
        <li className="mb-3">
          <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }} 
               onClick={() => setProductsOpen(!isProductsOpen)}>
            <span><FaTshirt className="me-2 text-warning" /> {!isCollapsed && "Products"}</span>
          </div>

          <Collapse in={isProductsOpen}>
            <ul className="list-unstyled ms-3">
              <li>
                <NavLink 
                  to="/admin/view" 
                  className="text-white text-decoration-none d-block py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffc107" : "transparent",
                    color: isActive ? "#000" : "#fff",
                  })}
                >
                  View Products
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/create" 
                  className="text-white text-decoration-none d-block py-2 px-3 rounded"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffc107" : "transparent",
                    color: isActive ? "#000" : "#fff",
                  })}
                >
                  Create
                </NavLink>
              </li>
            </ul>
          </Collapse>
        </li>

       
        <li className="mb-3">
          <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }} 
               onClick={() => setCategoryOpen(!isCategoryOpen)}>
            <span><FaList className="me-2 text-secondary" /> {!isCollapsed && "Category"}</span>
          </div>
          <Collapse in={isCategoryOpen}>
            <ul className="list-unstyled ms-3">
              <li>Subcategory</li>
              <li>Manage</li>
            </ul>
          </Collapse>
        </li>

        
        <li className="mb-3">
          <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }} 
               onClick={() => setInventoryOpen(!isInventoryOpen)}>
            <span><FaCubes className="me-2 text-secondary" /> {!isCollapsed && "Inventory"}</span>
          </div>
          <Collapse in={isInventoryOpen}>
            <ul className="list-unstyled ms-3">
              <li>Stock</li>
              <li>Reports</li>
            </ul>
          </Collapse>
        </li>

        
        <li className="mb-3">
          <div className="d-flex align-items-center justify-content-between" style={{ cursor: "pointer" }} 
               onClick={() => setOrdersOpen(!isOrdersOpen)}>
            <span><FaClipboardList className="me-2 text-secondary" /> {!isCollapsed && "Orders"}</span>
          </div>
          <Collapse in={isOrdersOpen}>
            <ul className="list-unstyled ms-3">
              <li>Pending</li>
              <li>Completed</li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;