import { IEmptyStateComponent } from "../../models/common";
import { StyledEmptyStateContainer } from "./styles";

const EmptyState = ({ message }: IEmptyStateComponent) => (
  <StyledEmptyStateContainer>
    <h4>{message}</h4>
  </StyledEmptyStateContainer>
);

export default EmptyState;
