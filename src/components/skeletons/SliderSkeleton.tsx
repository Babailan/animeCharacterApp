import Skeleton from "@mui/material/Skeleton";
function SkeletonLoading() {
  return (
    <div>
      <Skeleton
        variant="text"
        style={{ width: "40%", height: "50px", backgroundColor: "#3A3B3C" }}
      />
      <Skeleton
        variant={"rectangular"}
        style={{ width: "100%", height: "200px", backgroundColor: "#3A3B3C" }}
      />
    </div>
  );
}

export default SkeletonLoading;
