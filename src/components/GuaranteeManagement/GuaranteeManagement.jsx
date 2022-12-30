import { Box } from "@chakra-ui/react";
import GuaranteeList from "./GuaranteeList";
import { useEffect, useContext } from "react";
import { GuaranteeContext } from "../../stores";

const GuaranteeManagement = () => {
  const [guaranteeProducts, getGuaranteeProducts] =
    useContext(GuaranteeContext);

  useEffect(() => {
    getGuaranteeProducts();
  }, []);

  return (
    <Box bgColor={"white"} p={["16px"]} mt={["16px"]}>
      {guaranteeProducts && <GuaranteeList />}
    </Box>
  );
};

export default GuaranteeManagement;
