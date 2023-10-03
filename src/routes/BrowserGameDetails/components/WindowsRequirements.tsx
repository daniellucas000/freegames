import {
  InfoCol,
  MinimumRequirementsContainer,
} from '../styled';

export function WindowsRequirements({ data }: any) {

  return (
    <MinimumRequirementsContainer>
      <InfoCol>
        <span>OS</span>
        <p>{data.minimum_system_requirements.os}</p>
      </InfoCol>
      <InfoCol>
        <span>Processor</span>
        <p>{data.minimum_system_requirements.processor}</p>
      </InfoCol>
      <InfoCol>
        <span>Memory</span>
        <p>{data.minimum_system_requirements.memory}</p>
      </InfoCol>
      <InfoCol>
        <span>Graphics</span>
        <p>{data.minimum_system_requirements.graphics}</p>
      </InfoCol>
      <InfoCol>
        <span>Storage</span>
        <p>{data.minimum_system_requirements.storage}</p>
      </InfoCol>
      <InfoCol>
        <span>Additional Notes</span>
        <p>Specifications may change during development</p>
      </InfoCol>
    </MinimumRequirementsContainer>
  );
}
