import { useState, useContext, useEffect } from "react";
import { Query } from "../../hooks/sizeQuery";
import MediaQuery from "react-responsive";
import dynamic from "next/dynamic";
import { Box, Skeleton } from "@mui/material";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [onLoad, isOnLoad] = useState(true);
  useEffect(() => {
    isOnLoad(false);
    const check = getCookie("user");
    if (check) {
      setThereIs(true);
    }
  }, []);

  if (onLoad)
    return (
      <div className={`navbar ${router.pathname == "/" ? "absolute" : ""}`}>
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
    <div className={`navbar ${router.pathname == "/" ? "absolute" : ""}`}></div>
  );
}
