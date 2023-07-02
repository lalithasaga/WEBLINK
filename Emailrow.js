/*import {  IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function EmailRow({ id, title1, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title1,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <IconButton>
          <FiberManualRecordIcon/>
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title1}</h3>
      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow; */

/*import { IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function EmailRow({ id, title1, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title1,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        <IconButton>
          <FiberManualRecordIcon style={{ color: "blue", fontSize: "8px" }} />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title1}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow; */


/*import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function EmailRow({ id, title1, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRead, setIsRead] = useState(false);

  const openMail = () => {
    setIsRead(true);
    dispatch(
      selectMail({
        id,
        title1,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className={`emailRow ${isRead ? "read" : "unread"}`}>
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        {!isRead && (
          <IconButton>
            <FiberManualRecordIcon
              style={{ color: "blue", fontSize: "8px" }}
            />
          </IconButton>
        )}
      </div>
      <h3 className="emailRow-title">{title1}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow; */

import { IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function EmailRow({ id, title1, subject, description, time, isRead }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title1,
        subject,
        description,
        time,
        isRead: true, // Mark the email as read when opened
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className={`emailRow ${isRead ? "read" : "unread"}`}>
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        {!isRead && (
          <IconButton>
            <FiberManualRecordIcon
              style={{ color: "blue", fontSize: "8px" }}
            />
          </IconButton>
        )}
      </div>
      <h3 className="emailRow-title">{title1}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;

