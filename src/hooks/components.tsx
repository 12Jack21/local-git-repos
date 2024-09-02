import { useState } from "react";
import { Action, ActionPanel, Color, Icon } from "@raycast/api";

export const useDetailedView = (): [boolean, () => void, () => void] => {
  const [isDetailedViewEnabled, setIsDetailedViewEnabled] = useState(false);
  const showDetails = () => setIsDetailedViewEnabled(true);
  const hideDetails = () => setIsDetailedViewEnabled(false);
  return [isDetailedViewEnabled, showDetails, hideDetails];
};

export const ShowDetailsAction = ({ showDetails }: { showDetails: () => void }) => {
  return <Action title="Show Details" onAction={showDetails} icon={Icon.Eye} />;
};

export const HideDetailsAction = ({ hideDetails }: { hideDetails: () => void }) => {
  return <Action title="Hide Details" onAction={hideDetails} icon={Icon.EyeDisabled} />;
};

type ListItemActionsProps = {
  isDetailedViewEnabled: boolean;
  showViewAction: JSX.Element;
  hideViewAction: JSX.Element;
};
export const ListItemActions = ({ isDetailedViewEnabled, showViewAction, hideViewAction }: ListItemActionsProps) => (
  <ActionPanel.Section>{isDetailedViewEnabled ? hideViewAction : showViewAction}</ActionPanel.Section>
);
