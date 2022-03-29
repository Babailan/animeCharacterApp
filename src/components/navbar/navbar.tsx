import { useState, useContext, useEffect } from "react";
import { Query } from "../../hooks/sizeQuery";
import MediaQuery from "react-responsive";
import dynamic from "next/dynamic";
import { Box, Skeleton } from "@mui/material";
import { getCookie } from "cookies-next";
const MobileNavbar = dynamic(() => import("./navbarMobile"), { ssr: false });
const NavDesktop = dynamic(() => import("./navbarDesktop"), { ssr: false });

export default function Navbar() {
  const query = useContext(Query);
  const [onLoad, isOnLoad] = useState(true);
  const [user, setUser] = useState(false);

  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    isOnLoad(false);
    const check = getCookie("user");
    if (check) {
      setUser(true);
    }
  }, []);

  if (onLoad)
    return (
      <div className="navbar">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            animation={"wave"}
            variant={"rectangular"}
            sx={{ width: "10%", height: "30px", bgColor: "#737373" }}
          />
          <Skeleton
            animation={"wave"}
            variant={"rectangular"}
            sx={{ width: "20%", height: "30px", bgColor: "#737373" }}
          />
          <div
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "flex-end",
              gap: "1em",
            }}
          >
            <Skeleton
              animation={"wave"}
              variant={"circular"}
              sx={{ width: "30px", height: "30px", bgColor: "#737373" }}
            />
            <Skeleton
              animation={"wave"}
              variant={"rectangular"}
              sx={{
                width: "100%",
                maxWidth: "200px",
                height: "30px",
                bgColor: "#737373",
              }}
            />
          </div>
        </Box>
      </div>
    );

  return (
    <div className="navbar">
      <MediaQuery maxWidth={query.mobileNav}>
        <MobileNavbar
          data={data}
          setData={setData}
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
          previousCall={previousCall}
          setPreviousCall={setPreviousCall}
          checkUser={user}
        />
      </MediaQuery>
      <MediaQuery minWidth={query.DesktopNav}>
        <NavDesktop
          data={data}
          setData={setData}
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
          previousCall={previousCall}
          setPreviousCall={setPreviousCall}
          checkUser={user}
        />
      </MediaQuery>
    </div>
  );
}
