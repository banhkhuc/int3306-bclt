import { Tr, Th, Checkbox, Image, AspectRatio, Box } from "@chakra-ui/react";
import { useState } from "react";
import EditFactory from "../EditFactory";

const FactoryItem = ({ checkedItems, setCheckedItems, index, ...props }) => {
  const { id, name, address } = props;
  const [isEditFactory, setIsEditFactory] = useState(false);

  const handleChecked = () => {
    checkedItems[index] = !checkedItems[index];
    setCheckedItems([...checkedItems]);
  };

  return (
    <Tr>
      <EditFactory
        {...{
          isEditFactory,
          setIsEditFactory,
          typeEdit: "edit",
        }}
        {...props}
      />
      <Th>
        <Checkbox isChecked={checkedItems[index]} onChange={handleChecked} />
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{id}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{name}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{address}</Box>
      </Th>
    </Tr>
  );
};

export default FactoryItem;
