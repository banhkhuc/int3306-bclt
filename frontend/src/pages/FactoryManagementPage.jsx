import { Box, useToast } from "@chakra-ui/react";
import FactoryManagement from "../components/FactoryManagement";
import FactoryManagementTopBar from "../components/FactoryManagementTopBar";
import { useEffect, useContext, useState } from "react";
import { FactoryContext } from "../stores";
import EditFacility from "../components/EditFacility/EditFacility";

const FactoryManagementPage = () => {
  const [data, setData] = useState();
  const toast = useToast();

  useEffect(() => {
    const getFactories = async () => {
      const res = await getFactoriesAPI();
      if (res.status === 200) {
        setData(res.data);
      } else {
        toast({
          position: "top",
          title: "Fetch data fail",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    };
    getFactories();
  }, []);

  return (
    <Box m={["16px"]}>
      {data && (
        <>
          <EditFacility />
          <FactoryManagementTopBar />
          <Box>fe</Box>
          <FactoryManagement getFactories = {data}/> 
        </>
      )}
    </Box>
  );
};

export default FactoryManagementPage;

