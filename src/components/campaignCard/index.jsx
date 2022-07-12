import {
  BadgesList,
  Body,
  CampaignCardContainer,
  Description,
  FigureContent,
  FigureHolder,
  Requirement,
  RequirementsList,
  Subtitle,
  Title,
} from "./style";

import { ReactComponent as BadgeVolunteer } from "../../assets/imgs/BadgeVolunteer.svg";
import { ReactComponent as BadgeDonation } from "../../assets/imgs/BadgeDonation.svg";

const CampaignCard = ({
  campaignId,
  image,
  title,
  description = "",
  requirements = [],
  isVolunteer = false,
  isDonation = false,
}) => {
  return (
    <CampaignCardContainer>
      <FigureHolder>
        <img src={image} alt={title} />
      </FigureHolder>
      <FigureContent>
        <Title>{title}</Title>
      </FigureContent>
      {(description ||
        isVolunteer ||
        isDonation ||
        requirements.length > 0) && (
        <Body>
          {(isVolunteer || isDonation) && (
            <BadgesList>
              {isVolunteer && (
                <li>
                  <BadgeVolunteer />
                </li>
              )}
              {isDonation && (
                <li>
                  <BadgeDonation />
                </li>
              )}
            </BadgesList>
          )}
          {description && <Description>{description}</Description>}
          {requirements.length > 0 && (
            <>
              <Subtitle>Precisamos de</Subtitle>
              <RequirementsList>
                {requirements.map(
                  (req, i) =>
                    i + 1 <= 2 && (
                      <Requirement withBullet key={req}>
                        {req}
                      </Requirement>
                    )
                )}
                {requirements.length > 2 && (
                  <Requirement others>
                    mais {requirements.length - 2} ite
                    {requirements.length > 1 ? "m" : "ns"}...
                  </Requirement>
                )}
              </RequirementsList>
            </>
          )}
        </Body>
      )}
    </CampaignCardContainer>
  );
};

export default CampaignCard;
