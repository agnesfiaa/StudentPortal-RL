import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();
	const nfdClick = () => {
		navigate("");
	};

	return (
		<Center
			w="100%"
			h="100vh"
			bg={
				"rgb(238, 174, 202) radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
			}
		>
			<VStack spacing={6}>
				<Heading as={"h1"} size={"2xl"}>
					404 | Not Found
				</Heading>
				<Button onClick={nfdClick} data-testid="back">
					Back
				</Button>
			</VStack>
		</Center>
	);
};

export default NotFound;