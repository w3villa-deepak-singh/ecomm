import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

        <SimpleTreeView
          // defaultCollapseIcon={<ExpandMoreIcon />}
          // defaultExpandIcon={<ImportExportIcon />}
          aria-label="Products navigator"
          slots={{
            expandIcon: ImportExportIcon,
            collapseIcon: ExpandMoreIcon
          }}

        >
          <TreeItem 
          itemId="1"
           label="Products">
             <TreeItem
               itemId="2"
              //  label="All"
              //  icon={<PostAddIcon />}
              //  onClick={() => navigate("/admin/products")}
              label={
                <div onClick={() => navigate("/admin/products")}>
                  <PostAddIcon style={{ marginRight: '8px' }} />
                  All
                </div>
              }

             />
             <TreeItem
               itemId="3"
              //  label="Create"
              //  icon={<AddIcon />}
              //  onClick={() => navigate("/admin/product")}
              label={
                <div onClick={() => navigate("/admin/product")}>
                  <AddIcon style={{ marginRight: '8px' }} />
                  Create
                </div>
              }

             />
          </TreeItem>
        </SimpleTreeView>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;