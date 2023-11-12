import React, { useState, ChangeEvent, FormEvent } from "react";
import { database } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";

interface ProfileData {
    name: string;
    designation: string;
    profilePicture: File | null;
}

function CreateProfile() {
    const [profileData, setProfileData] = useState<ProfileData>({
        name: '',
        designation: '',
        profilePicture: null
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, profilePicture: event.target.files ? event.target.files[0] : null });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the form submission here
        try {
            await addDoc(collection(database, "profiles"), {
                name: profileData.name,
                designation: profileData.designation,
                // profilePictureUrl: 'URL from Firebase Storage after file upload'
            });
            console.log('Profile created successfully');
        } catch (error) {
            console.error("Error writing document: ", error);
        }
        console.log(profileData);
    };


    return (
        <div className="flex flex-col items-center justify-center p-5">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="name" 
                            type="text" 
                            placeholder="John Doe" 
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="designation" 
                            type="text" 
                            placeholder="UX/UI Designer" 
                            name="designation"
                            value={profileData.designation}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="profilePicture">
                            Profile Picture
                        </label>
                        <input 
                            className="appearance-none block w-full text-gray-700 py-3 px-4 leading-tight"
                            id="profilePicture" 
                            type="file" 
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Create Profile
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateProfile;