import { Box } from "@chakra-ui/react";
import EditFacility from "../components/EditFacility";
import GuaranteeManagement from "../components/GuaranteeManagement";
import GuaranteeManagementTopBar from "../components/GuaranteeManagementTopBar";

const GuaranteeManagementPage = () => {
  return (
    <Box m={["16px"]}>
      <EditFacility />
      <GuaranteeManagementTopBar />
      <GuaranteeManagement />
    </Box>
  );
};

export default GuaranteeManagementPage;
