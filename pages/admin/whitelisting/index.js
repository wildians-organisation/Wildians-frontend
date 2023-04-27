import React, { useState } from "react";
import axios from "axios";
import * as config from "../../../config/config.js";
import Layout from "components/AdminDashBoard/Layout.js";
import { firestore } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function Whitelist() {
    const [formInfo, setFormInfo] = useState({
        adresseWallet: "",
        plateformeContact: "",
        loginMail: "",
        commentaire: ""
      });
    
    
    const whitelistCollection = collection(firestore,'whitelist');

    async function addToWhitelist(formData) {
        const newDoc = await addDoc(whitelistCollection, {formData
        });
    }

    const handleButtonClick = () => {
        addToWhitelist(formInfo);
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
            </Layout>
        </>
    );
}
