import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './hooks/useAuth';

const AddExpModal = ({account,isAddNewExp}) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const d = new Date();
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let newDate = day + ", " + date + " " + month + " " + year;


    const onSubmit = data => {
        isAddNewExp(false);
        if (user.email === account.email) {
            data.userId = user.email;
            data.accountId = account._id;
            data.accountName = account.name;
            data.date = newDate;
            axios.post('http://localhost:5000/addedExpence', data).then(res => {
                if (res.data.insertedId) {
                    isAddNewExp(true);
                    alert('added successfully');
                    reset();
                }
            });
        }
       
    };


    return (
        <div className="modal-dialog">
        <div  style={{ boxShadow: '1px 1px 4px 0px #55428F' }} className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
                <h5 className="modal-title fs-2" id="exampleModalLabel">Add Expence</h5>
                <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                    <img src="/close.png" style={{maxWidth: '30px'}} alt="" />
                </button>
            </div>
            <div className="modal-body">
                <form
                    className="p-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div class="form-floating">
                        <input
                            type="text"
                            class="form-control mb-3 fs-4 fw-bold"
                            id="floatingPassword"
                            placeholder="Reason Of Expence"
                            {...register('reason', { required: true })}
                        />
                        <label for="floatingPassword">Reason Of Expence</label>
                    </div> 
                    <div class="form-floating">
                        <input
                            type="text"
                            class="form-control mb-3 fs-4 fw-bold"
                            id="floatingPassword"
                            placeholder="Amount"
                            {...register('amount', { required: true })}
                        />
                        <label for="floatingPassword">Enter Amount</label>
                    </div> 
                    <div>
                    <input className="btn btn-bg rounded-3 text-uppercase w-100" type="submit" value='Add Money' />
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddExpModal;