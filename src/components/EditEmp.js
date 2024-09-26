import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import Titlebar from "./layout/Titlebar";
import Dropdown from "./buttons/Dropdown";
import Radio from "./buttons/Radio";
import Checkbox from "./buttons/Checkbox";

const EditEmp = () => {
    const [name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    };

    const [email, setEmail] = useState("");
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const [mobile, setMobile] = useState("");
    const handleMobile = (event) => {
        let value = event.target.value;
        if(value == "" || value.match(/^[0-9]+$/) && value.length <= 10) {
            setMobile(value);
        }
    };

    const optionsDes = [
        { label: "HR", value: 1 },
        { label: "Manager", value: 2 },
        { label: "Sales", value: 3 },
    ];

    const optionsGen = [
        { label: "Female", value: 1 },
        { label: "Male", value: 2 },
    ];

    const handleOptionSelectGen = (selectedOption) => {
        console.log("Selected option:", selectedOption);
    };

    const optionsCou = [
        { label: "MCA", value: 1 },
        { label: "BCA", value: 2 },
        { label: "BSc", value: 3 },
    ];
    const handleOptionSelectCou = (selectedOptions) => {
        console.log("Selected options:", selectedOptions);
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Navbar />
            <Titlebar title="Create Employee" />
            <div>
                <div action="" method="post">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile No.: </label>
                        <input
                            type="text"
                            id="mobile"
                            value={mobile}
                            onChange={handleMobile}
                        />
                    </div>
                    <div>
                        <label htmlFor="des">Designation: </label>
                        {/* dropdown for designation */}
                        <Dropdown
                            options={optionsDes}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Gender: </label>
                        <Radio
                            options={optionsGen}
                            onSelect={handleOptionSelectGen}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Course: </label>
                        <Checkbox
                            options={optionsCou}
                            onSelect={handleOptionSelectCou}
                        />
                    </div>
                    <div>
                        <label htmlFor="profileImage">Profile Image:</label>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default EditEmp;
