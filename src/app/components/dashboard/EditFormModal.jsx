'use client';

import { Button, Textarea, TextInput, Select, Label, Modal, Toast } from 'flowbite-react';
import { HiCollection, HiClipboardCheck, HiCheck } from 'react-icons/hi';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {Datacontext} from '@/app/dashboard/datacontext';
import { updateDataDb } from '@/app/dashboard/dbcrud';


const EditFormModal = ({ openModal, onCloseModal, selectedRow }) => {
    const { genid, eventname, eventmsg, eventcat, datepicker, sessionuid, googleid } = selectedRow;
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { objdata, setObjdata } = useContext(Datacontext);
    const [updatenotif, setUpdatenotif] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const updateData = (id, sid, newData) => {
        setObjdata(prevData =>
            prevData.map(item => (item.genid === id && item.sessionuid === sid ? { ...item, ...newData } : item))
        );
        updateDataDb(newData,googleid,setIsLoading);
    };


    const onSubmitdata = (data) => {
        updateData(genid, sessionuid, data); // Update data using the submitted ID and data
        setUpdatenotif(true);
        setTimeout(() => {
            setUpdatenotif(false);
            onCloseModal()
        }, 1500);

        reset();
    };

    return (
        <div>
            <Modal show={openModal} size="md" onClose={() => onCloseModal()} popup>
                <Modal.Header />
                <Modal.Body>

                    <form onSubmit={handleSubmit(onSubmitdata)} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <h3 className="font-bold">
                                    <div className="flex flex-wrap gap-2">
                                        Event ID: {genid}
                                    </div>
                                </h3>
                            </div>
                            <TextInput
                                {...register("eventname", { required: 'Field required', })}
                                id="eventname" type="text" icon={HiClipboardCheck} placeholder={eventname} shadow />
                        </div>
                        <div className="max-w-md">
                            <Select
                                {...register("eventcat", { required: 'Field required', })}
                                id="eventcat" icon={HiCollection}>
                                <option disabled>Current: {eventcat}</option>
                                <option>Meeting</option>
                                <option>Accomodation</option>
                                <option>Ordering</option>
                            </Select>
                        </div>
                        <Label htmlFor="comment" value="Selected Date:" />
                        <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm rounded-lg"
                            type="date" id="datepicker-current" value={datepicker} disabled />

                        <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm rounded-lg"
                            type="date" id="datepicker" {...register("datepicker")} placeholder={datepicker} />
                        <div>
                            <Textarea
                                {...register("eventmsg", { required: 'Field required', })}
                                id="eventmsg" type="text" placeholder={eventmsg} shadow />
                        </div>
                        <Button type="submit">Update Event</Button>
                    </form>

                    {updatenotif &&
                        <Toast className="update-edit-info">
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                                <HiCheck className="h-5 w-5" />
                            </div>
                            <div className="ml-3 text-sm font-normal">Updated info successfully.</div>
                        </Toast>}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditFormModal
