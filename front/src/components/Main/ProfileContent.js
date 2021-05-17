import ProfileNav from "../UI/ProfileNav";
import MainWrapper from "../UI/Wrappers/MainWrapper";
import ShowSubmittedStories from "./ShowSubmittedStories";
import ShowPersonalData from "./ShowPersonalData";

// Main container where stories are shown
const ProfileContent = (props) => {
  return (
    <MainWrapper>
      <ProfileNav handleSession={props.handleSession} logOutUser={props.logOutUser}/>
      <h2>Your profile</h2>
      <ShowPersonalData />
      <ShowSubmittedStories handleModalMessage={props.handleModalMessage} handleStoryToDelete={props.handleStoryToDelete} storyToDelete={props.storyToDelete}/>
    </MainWrapper>
  );
};

export default ProfileContent;
