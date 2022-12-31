import { Box } from "@chakra-ui/react";
import FactoryManagement from "../components/FactoryManagement";
import FactoryManagementTopBar from "../components/FactoryManagementTopBar";
import { useEffect, useContext } from "react";
import { FactoryContext } from "../stores";
import EditFacility from "../components/EditFacility/EditFacility";

const FactoryManagementPage = () => {
  const [factories, getFactories] = useContext(FactoryContext);

  useEffect(() => {
    getFactories();
  }, []);

  return (
    <Box m={["16px"]}>
      {factories && (
        <>
          <EditFacility />
          <FactoryManagementTopBar />
          <FactoryManagement />
        </>
      )}
    </Box>
  );
};

export default FactoryManagementPage;
