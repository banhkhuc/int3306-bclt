import { FactoryStore } from "./factoryStore";
import { GuaranteeStore } from "./guaranteeStore";
export const Stores = ({ children }) => {
  return (
    <GuaranteeStore>
      <FactoryStore>{children}</FactoryStore>
    </GuaranteeStore>
  );
};

export { FactoryContext } from "./factoryStore";
export { GuaranteeContext } from "./guaranteeStore";
