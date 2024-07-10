import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const ResetPass = ({ username, onClose }) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameValidated, setUsernameValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);



  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get('/api/login');
        setUser(response.data)

      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdmin();
  }, []);

  const handleUsernameCheck = () => {


    if (enteredUsername === user.username) {
      setUsernameValidated(true);
      setErrorMessage('');
    } else {
      setUsernameValidated(false);
      setErrorMessage('Wrong username. Please enter the correct username.');
    }
  };

  const handleReset = async () => {
    // Perform validation before resetting password
    if (usernameValidated && newPassword === confirmPassword) {
      try {
        const response = await axios.put('/api/login', { username: enteredUsername, newPassword: newPassword });
        console.log('Password reset successful:', response.data);
        onClose(); // Close the reset form after successful reset
      } catch (error) {
        console.error('Error resetting password:', error);
        setErrorMessage('Error resetting password. Please try again.');
      }
    } else {
      setErrorMessage('Please check your username and ensure passwords match.');
    }
  };

  return (
    <div className="reset-password-form bg-white p-5">
      <h3>Reset Passwords</h3>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={enteredUsername}
            onChange={(e) => setEnteredUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <center><Button color="success my-3" onClick={handleUsernameCheck}>Check Username</Button></center>
        </FormGroup>
        {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
        {usernameValidated && (
          <>
            <FormGroup>
              <Label for="newPassword">New Password</Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
              <div className='d-flex align-items-center gap-2'>
                <Input
                  type="checkbox"
                  label="Show Password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mt-2 "

                />
                <span>Show Password</span>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </FormGroup>
            <Button color="danger" onClick={handleReset}>Reset Password</Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default ResetPass;
