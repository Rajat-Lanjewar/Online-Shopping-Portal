import { Box } from "@material-ui/core";
import React, { useState } from "react";
import img from "./Assets/bg.jpg"
function ContactUs() {

    const STATUS = {
        IDLE: "IDLE",
        SUBMITTED: "SUBMITTED",
        SUBMITTING: "SUBMITTING",
        COMPLETED: "COMPLETED",
    };

    const initialContactUs = {
        firstname: "",
        lastname: "",
        areacode: "",
        telnum: "",
        emailid: "",
        feedback: ""
    };

    const styles = {
        color: "black",
        backgroundImage: `url(${img})`,
        fontSize: "1.5rem",
        fontFamily: "comic sans ms"
    };

    const [contactUs, setContactUs] = useState(initialContactUs);
    const [saveError, setSaveError] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const errors = getErrors(contactUs);
    const isValid = Object.keys(errors).length === 0;

    // Verifying Email by using REGEX
    function validEmail(val) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    }

    function onChange(e) {
        e.persist(); // persist the event
        setContactUs((curContactUs) => {
            return {
                ...curContactUs,
                [e.target.id]: e.target.value,
            };
        });
    }

    function getErrors(contactUs) {
        const result = {};
        if (!contactUs.firstname) result.firstname = "First name is required";
        if (!contactUs.lastname) result.lastname = "Last name is required";
        if (!contactUs.emailid) result.email = "Email is required";
        if (!contactUs.feedback) result.feedback = "Feedback is required";
        if (contactUs.emailid && !validEmail(contactUs.emailid)) result.email = "Email is invalid";
        return result;
    }

    async function onSubmit(event) {
        event.preventDefault();
        setStatus(STATUS.SUBMITTING);
        if (isValid) {
            try {
                alert('Successfully submitted form - ' + contactUs.firstname);
                setStatus(STATUS.COMPLETED);
            } catch (e) {
                setSaveError(e);
            }
        }
        else {
            setStatus(STATUS.SUBMITTED);
        }
    }

    if (saveError) throw saveError;
    if (status === STATUS.COMPLETED) {
        return <h1>Thank you for your feedback!</h1>;
    }
    return (
        <Box style={styles}>
            <div class="container">
                <div class="col-12"><br/>
                    <h2 style={{marginBottom:40}}>Send us your Feedback</h2>
                </div>
                <div class="col-12 col-md-9">
                    <form onSubmit={onSubmit}>
                        <div class="form-group row">
                            <label htmlFor="firstname" class="col-md-2 col-form-label">First Name</label>
                            <div class="col-md-10">
                                <input type="text" value={contactUs.firstname} class="form-control" id="firstname" name="firstname"
                                    placeholder="First Name" onChange={onChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label htmlFor="lastname" class="col-md-2 col-form-label">Last Name</label>
                            <div class="col-md-10">
                                <input type="text" value={contactUs.lastname} class="form-control" id="lastname" name="lastname"
                                    placeholder="Last Name" onChange={onChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label htmlFor="telnum" class="col-12 col-md-2 col-form-label">Contact no.</label>
                            <div class="col-5 col-md-3">
                                <input type="tel" value={contactUs.areacode} class="form-control" id="areacode" name="areacode"
                                    placeholder="Area code" onChange={onChange} />
                            </div>
                            <div class="col-7 col-md-7">
                                <input type="tel" value={contactUs.telnum} class="form-control" id="telnum" name="telnum" placeholder="Tel. number"
                                    onChange={onChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label htmlFor="emailid" class="col-md-2 col-form-label">Email</label>
                            <div class="col-md-10">
                                <input type="email" value={contactUs.emailid} class="form-control" id="emailid" name="emailid" placeholder="Email"
                                    onChange={onChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label htmlFor="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                            <div class="col-md-10">
                                <textarea value={contactUs.feedback} class="form-control" id="feedback" name="feedback" rows="8"
                                    onChange={onChange} />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-md-2 col-md-10">
                                <button type="submit" class="btn btn-dark" style={{marginBottom:40}}>Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md">
                    {!isValid && status === STATUS.SUBMITTED && (
                        <div role="alert">
                            <p>Please fix the following errors:</p>
                            <ul>
                                {Object.keys(errors).map((key) => {
                                    return <li key={key}>{errors[key]}</li>;
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Box>
    );
}

export default ContactUs;