import React, { useState } from 'react';
import './feedbackform.css';
import { useNavigate} from 'react-router-dom';




const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phoneno: '',
        location: '',
        description: ''
    });

    
    const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/feedform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Feedback submitted successfully!');
                console.log(data);
                navigate('/dashboard');
            } else {
                alert('Error submitting feedback');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
<section>
            
            <div className="report-issue-section"> 
            
            <form className="form" onSubmit={handleSubmit}>
            <h2>Submit Feedback</h2> 
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type="text" name="phoneno" value={formData.phoneno} onChange={handleChange} required />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </section>
    );
};

export default FeedbackForm;
