import React, { useState } from "react";
import NavBar from "../components/Navbar";
import {
	Box,
	FormControl,
	FormLabel,
	Button,
	Input,
	Select,
	Center,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = (props) => {
	const [getFullName, setFullName] = useState("");
	const [getAddress, setAddress] = useState("");
	const [getPhone, setPhone] = useState("");
	const [getDate, setDate] = useState("");
	const [getGender, setGender] = useState("");
	const [getPrody, setPrody] = useState("");
	const [getPicture, setPicture] = useState("");

	const addStudent = async (e) => {
		e.preventDefault();

		const newData = {
			fullname: getFullName,
			address: getAddress,
			birthDate: getDate,
			gender: getGender,
			phoneNumber: getPhone,
			faculty: "",
			programStudy: getPrody,
			profilePicture: getPicture,
		};

		const prodi = newData["programStudy"];

		if (
			prodi === "Ekonomi" ||
			prodi === "Akuntansi" ||
			prodi === "Manajemen"
		) {
			newData["faculty"] = "Fakultas Ekonomi";
		} else if (
			prodi === "Hubungan Internasional" ||
			prodi === "Administrasi Bisnis" ||
			prodi === "Administrasi Publik"
		) {
			newData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
		} else if (prodi === "Arsitektur" || prodi === "Teknik Sipil") {
			newData["faculty"] = "Fakultas Teknik";
		} else {
			newData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
		}

		props.createStudent(newData);

		setFullName("");
		setAddress("");
		setDate("");
		setGender("");
		setPhone("");
		setPrody("");
		setPicture("");
	};

	return (
		<>
			<NavBar />
			<div className="container">
				{/* <div className="card-form" id="form-student"> */}
				<Box margin="4" maxWidth="500px" mx="auto">
					<form onSubmit={addStudent}>
						<FormControl>
							<FormLabel htmlFor="input-name">Fullname</FormLabel>
							<Input
								type="text"
								data-testid="name"
								id="input-name"
								onChange={({ target }) =>
									setFullName(target.value)
								}
								value={getFullName}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
								placeholder="Enter full name"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-picture">
								Profile Picture
							</FormLabel>
							<Input
								type="text"
								id="input-picture"
								data-testid="profilePicture"
								onChange={({ target }) =>
									setPicture(target.value)
								}
								value={getPicture}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
								placeholder="Enter your link photo"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-address">
								Address
							</FormLabel>
							<Input
								type="text"
								data-testid="address"
								onChange={({ target }) =>
									setAddress(target.value)
								}
								value={getAddress}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
								placeholder="Enter address"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-phone">
								Phone Number
							</FormLabel>
							<Input
								type="text"
								id="input-phone"
								data-testid="phoneNumber"
								onChange={({ target }) =>
									setPhone(target.value)
								}
								value={getPhone}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
								placeholder="Enter phone number"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-date">
								Birth Date
							</FormLabel>
							<Input
								type="date"
								id="input-date"
								data-testid="date"
								onChange={({ target }) => setDate(target.value)}
								value={getDate}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
							/>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-gender">Gender</FormLabel>
							<Select
								className="input-select"
								id="input-gender"
								data-testid="gender"
								onChange={({ target }) =>
									setGender(target.value)
								}
								value={getGender}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
							>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="input-prody">
								Program Study
							</FormLabel>
							<Select
								className="input-select"
								data-testid="prody"
								id="input-prody"
								onChange={({ target }) =>
									setPrody(target.value)
								}
								value={getPrody}
								size="sm"
								w="100%"
								m={2}
								variant="filled"
							>
								<option value="Ekonomi">Ekonomi</option>
								<option value="Manajemen">Manajemen</option>
								<option value="Akuntansi">Akuntansi</option>
								<option value="Administrasi Publik">
									Administrasi Publik
								</option>
								<option value="Administrasi Bisnis">
									Administrasi Bisnis
								</option>
								<option value="Hubungan Internasional">
									Hubungan Internasional
								</option>
								<option value="Teknik Sipil">
									Teknik Sipil
								</option>
								<option value="Arsitektur">Arsitektur</option>
								<option value="Matematika">Matematika</option>
								<option value="Fisika">Fisika</option>
								<option value="Informatika">Informatika</option>
							</Select>
						</FormControl>
						<Center>
							<div className="label-input">
								<Button
									type="submit"
									value={"Add student"}
									id="add-btn"
									className="btn-add"
									data-testid="add-btn"
									p={4}
									bg="#668bc4"
									color="white"
									size="md"
									variant="solid"
								>
									Add student
								</Button>
							</div>
						</Center>
					</form>
				</Box>
			</div>
			<Footer />
		</>
	);
};

export default AddStudent;