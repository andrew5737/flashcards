import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// override jsdom console.error so that it does not log errors during tests
// errors will be handled normally
global.console.error = () => {};
