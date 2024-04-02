import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
