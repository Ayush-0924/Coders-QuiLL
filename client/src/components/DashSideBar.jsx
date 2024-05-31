import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser, HiDocumentText,HiOutlineUserGroup,HiAnnotation } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";

export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const { currentuser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handelOnSignOut = async () => {
    try {
      const res = await fetch(`/api/user/signout`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentuser.isAdmin ? <span className="text-white">Admin</span> : <span className="text-white">user</span>}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
            {currentuser.isAdmin && (
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={tab === "post"}
                  icon={HiDocumentText }
                  as="div"
                >
                  posts
                </Sidebar.Item>
              </Link>
            )}
            {currentuser.isAdmin && (
              <Link to="/dashboard?tab=users">
                <Sidebar.Item
                  active={tab === "users"}
                  icon={HiOutlineUserGroup }
                  as="div"
                >
                  users
                </Sidebar.Item>
              </Link>
            )}
            {currentuser.isAdmin && (
              <Link to="/dashboard?tab=comments">
                <Sidebar.Item
                  active={tab === "comments"}
                  icon={HiAnnotation }
                  as="div"
                >
                  comments
                </Sidebar.Item>
              </Link>
            )}
          </Link>
          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handelOnSignOut}
          >
            sign up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
