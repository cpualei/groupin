import React, { useState } from "react";
import { useSelector } from "react-redux";
import GroupList from "../GroupList";
import Search from "../Search";
import "./Dashboard.css";

function Dashboard() {
  const sessionUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => state.users);
  const user = users[sessionUserId];

  const groupObjs = useSelector((state) => state.groups);
  const allGroups = Object.values(groupObjs);
  const pinnedIds = user?.pinned;
  const pinnedGroups = [];
  pinnedIds?.forEach((id) => {
    return pinnedGroups.push(groupObjs[id]);
  });

  const [groupType, setGroupType] = useState(allGroups);
  const [searchedGroups, setSearchedGroups] = useState([]);
  const [showSearched, setShowSearched] = useState(false);
  const [displayPinned, setDisplayPinned] = useState(false);

  const handleDisplayPinned = () => {
    setGroupType(pinnedGroups);
    setDisplayPinned(true);
  };

  const handleDisplayAll = () => {
    setGroupType(allGroups);
    setDisplayPinned(false);
  };

  return (
    <div id="dashboard-container">
      <div id="dashboard">
        <div id="username-div">
          <h1>{user.username}'s Dashboard</h1>
        </div>
        <Search
          setSearchedGroups={setSearchedGroups}
          setShowSearched={setShowSearched}
          groupType={groupType}
        />
        <div id="dashboard-tabs-div">
          <button
            className={
              displayPinned ? "dashboard-tabs selected-tab" : "dashboard-tabs"
            }
            id="pinned-tab"
            onClick={handleDisplayPinned}
          >
            Pinned groups
          </button>
          <button
            className={
              !displayPinned ? "dashboard-tabs  selected-tab" : "dashboard-tabs"
            }
            id="browse-all-tab"
            onClick={handleDisplayAll}
          >
            Browse all groups
          </button>
        </div>
        <GroupList groupType={showSearched ? searchedGroups : groupType} />
      </div>
    </div>
  );
}

export default Dashboard;
