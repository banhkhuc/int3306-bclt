import { FactoryStore } from "./factoryStore";
import { GuaranteeStore } from "./guaranteeStore";
import { ReportStore } from "./reportStore";

export const Stores = ({ children }) => {
  return (
    <ReportStore>
      <GuaranteeStore>
        <FactoryStore>{children}</FactoryStore>
      </GuaranteeStore>
    </ReportStore>
  );
};

export { FactoryContext } from "./factoryStore";
export { GuaranteeContext } from "./guaranteeStore";
export { ReportContext } from "./reportStore";
