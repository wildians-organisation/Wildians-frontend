import React, { useState, useEffect } from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import Layout from "components/AdminDashBoard/Layout.js";
import { firestore } from "../../../firebaseConfig";
import { QueryOrderByConstraint, addDoc, collection, getDocs } from "firebase/firestore";

export default function Whitelist() {
    const [formInfo, setFormInfo] = useState({
        adresseWallet: "",
        plateformeContact: "",
        loginMail: "",
        commentaire: ""
      });
    
    const [whitelistedUsers, setWhitelistedUsers] = useState([]);

    const whitelistCollection = collection(firestore, 'whitelist');

    async function addToWhitelist(formData) {
        const newDoc = await addDoc(whitelistCollection, {formData
        });
    }

    async function deleteFromWhitelist(id) {
        await deleteDoc(doc(whitelistCollection, id));
      }

    async function fetchWhitelistData() {
        const querySnapshot = await getDocs(whitelistCollection);
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setWhitelistedUsers(documents);
    }

    useEffect(() => {
        fetchWhitelistData();
    }, []);

    const handleButtonClick = () => {
        addToWhitelist(formInfo);
      };
    const handleDeleteClick = (id) => {
        deleteFromWhitelist(id);
        fetchWhitelistData();
    };
    
      const handleFieldChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
    
        setFormInfo((prevFields) => ({
          ...prevFields,
          [fieldName]: fieldValue
        }));
      };
    
    
    
    return (
        <>
            <Layout>
                <p className="text-gray-700 text-3xl mb-16 font-bold">
                    Whitelisting
                </p>
                <div>
          <label htmlFor="adresseWallet">Adresse Wallet:</label>
          <input type="text" id="adresseWallet" name="adresseWallet" placeholder="Wallet Address" onChange={handleFieldChange} />
        </div>

        <div>
          <label htmlFor="plateformeContact">Plateforme du contact:</label>
          <input type="text" id="plateformeContact" name="plateformeContact" placeholder="Contact Platform" onChange={handleFieldChange} />
        </div>

        <div>
          <label htmlFor="loginMail">Login/Mail du whitelisté:</label>
          <input type="text" id="loginMail" name="loginMail" placeholder="Login/Mail" onChange={handleFieldChange} />
        </div>

        <div>
          <label htmlFor="commentaire">Commentaire:</label>
          <input type="text" id="commentaire" name="commentaire" placeholder="Comment" onChange={handleFieldChange} />
        </div>

                <button onClick={handleButtonClick}>Add Whitelist</button>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 whitespace-nowrap">Adresse Wallet</th>
                            <th className="py-2 px-4 whitespace-nowrap">Plateforme Contact</th>
                            <th className="py-2 px-4 whitespace-nowrap">Login/Mail</th>
                            <th className="py-2 px-4 whitespace-nowrap">Commentaire</th>
                            <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {whitelistedUsers.map((whitelist) => (
                            <tr key={whitelist.id} className="border-b border-gray-200">
                                <td className="py-2 px-4 whitespace-nowrap">{whitelist.formData.adresseWallet}</td>
                                <td className="py-2 px-4 whitespace-nowrap">{whitelist.formData.plateformeContact}</td>
                                <td className="py-2 px-4 whitespace-nowrap">{whitelist.formData.loginMail}</td>
                                <td className="py-2 px-4 whitespace-nowrap">{whitelist.formData.commentaire}</td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDeleteClick(whitelist.id)}
                                >
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </Layout>
        </>
    );
}
