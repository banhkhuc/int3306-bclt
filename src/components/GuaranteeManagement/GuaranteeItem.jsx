import {
  Tr,
  Th,
  Box,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Input,
  useToast,
} from "@chakra-ui/react";
import { IoIosOptions } from "react-icons/io";
import { useState, useRef, useCallback, useContext } from "react";
import EditFactory from "../EditFactory";
import PopoverTriggerCustom from "../PopoverTriggerCustom";
import { exportDistributeAPI, exportProduceAPI } from "../../api/guaranteeAPI";
import { GuaranteeContext } from "../../stores";

const GuaranteeItem = ({
  Product,
  productCode,
  produceId,
  insuranceDate,
  error,
}) => {
  const { ProductLine } = Product;
  const getGuaranteeProducts = useContext(GuaranteeContext)[1];
  const [isEditFactory, setIsEditFactory] = useState(false);
  const toast = useToast();
  const distribute_date = Product.createdAt
    ?.split("T")
    .at(0)
    .split("-")
    .reverse()
    .join("/");
  const guaranteeDate = insuranceDate
    ?.split("T")
    .at(0)
    .split("-")
    .reverse()
    .join("/");

  const handleExportDistribute = useCallback(async () => {
    const data = { productCode };
    const res = await exportDistributeAPI(data);
    if (res.status === 200) {
      toast({
        position: "top",
        title: "Chuyển về đại lý phân phối thành công",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Chuyển về đại lý phân phối thất bại",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    getGuaranteeProducts();
  }, []);

  const handleExportProduce = useCallback(async () => {
    const data = {
      productCode,
      produceId,
    };
    const res = await exportProduceAPI(data);
    if (res.status === 200) {
      toast({
        position: "top",
        title: "Chuyển về cơ sở sản xuất thành công",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "Chuyển về cơ sở sản xuất thất bại",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    getGuaranteeProducts();
  }, []);

  return (
    <Tr>
      <EditFactory
        {...{
          isEditFactory,
          setIsEditFactory,
          typeEdit: "edit",
          id: 123,
          name: "cơ sở sản xuất",
          address: "hà nội",
        }}
      />
      <Th>
        <Box whiteSpace={"normal"}>{Product.code}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{ProductLine.name}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{distribute_date}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{guaranteeDate}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{ProductLine.guaranteePeriod} tháng</Box>
      </Th>
      {/* <Th>
        <Box whiteSpace={"normal"}>Nhà máy Hà nội</Box>
      </Th> */}
      <Th>
        <Box whiteSpace={"normal"}>FPT Shop</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{error}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{Product.status && "Đang bảo hành"}</Box>
      </Th>
      <Th>
        <Menu>
          <MenuButton
            as={IconButton}
            fontSize={"1.2rem"}
            icon={<IoIosOptions />}
            variant={"outline"}
          />
          <MenuList>
            <MenuItem onClick={handleExportDistribute}>
              Chuyển về đại lý phân phối
            </MenuItem>
            <MenuItem onClick={handleExportProduce}>
              Chuyển về cơ sở sản xuất
            </MenuItem>
          </MenuList>
        </Menu>
      </Th>
    </Tr>
  );
};

const ErrorType = () => {
  const [newErrorType, setNewErrorType] = useState("hỏng cảm biến");
  const [oldErrorType, setOldErrorType] = useState("hỏng cảm biến");

  const handleSaveErrorType = () => {
    if (newErrorType !== oldErrorType) {
      console.log("re-render error");
      setOldErrorType(newErrorType);
    }
  };

  return (
    <PopoverTriggerCustom nameBtn={oldErrorType} saveFunc={handleSaveErrorType}>
      <Input
        type={"text"}
        value={newErrorType}
        onChange={(e) => {
          setNewErrorType(e.target.value);
        }}
      />
    </PopoverTriggerCustom>
  );
};

const ProductStatus = () => {
  const [status, setStatus] = useState("đang sửa chữa bảo hành");
  const selectStatus = useRef(null);
  const options = [
    "Đang sửa chữa bảo hành",
    "Đã bảo hành xong",
    "Đã trả lại bảo hành cho khách hàng",
    "Lỗi, cần trả về nhà máy",
    "Lỗi, đã đưa về cơ sở sản xuất",
  ];

  const handleSaveStatus = () => {
    if (selectStatus.current) {
      setStatus(options[parseInt(selectStatus.current.value)]);
    }
  };

  return (
    <PopoverTriggerCustom nameBtn={status} saveFunc={handleSaveStatus}>
      <Select ref={selectStatus} size={"sm"} flex={1} borderRadius={"5px"}>
        {options.map((e, i) => (
          <option value={i}>{e}</option>
        ))}
      </Select>
    </PopoverTriggerCustom>
  );
};

export default GuaranteeItem;
