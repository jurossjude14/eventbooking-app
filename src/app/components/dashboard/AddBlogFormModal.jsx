'use client';

import { Button, Textarea, TextInput, Select, Modal, Toast } from 'flowbite-react';
import { HiCollection, HiClipboardCheck, HiCheck } from 'react-icons/hi';
import { FaTelegramPlane } from "react-icons/fa";
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Blogcontext } from '@/app/dashboard/datacontext';


const AddBlogFormModal = ({ openModal, onCloseModal }) => {
  
    const { blogdata, setBlogdata, loading } = useContext(Blogcontext);
    const [sucessData, setSuccessData] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmitdata = async (data) => {
        try {
            const res = await fetch("http://localhost:3000/api/blog/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ ...data }),
            });
            
            const datalist = res.json();
            const { docId } = await datalist;

            if (res.ok) {
                const singleObj = { ...data, id:docId }
                setBlogdata([...blogdata, singleObj]);
                reset();
                setSuccessData(true);

                setTimeout(() => {
                    setSuccessData(false);
                    onCloseModal();
                }, 1000);
            } else {
                throw new Error("Failed to create a Post");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Modal show={openModal} size="md" onClose={() => onCloseModal()} popup>
                <Modal.Header />
                <Modal.Body>
                     {sucessData && <Toast>
                        <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                        <div className="pl-4 text-sm font-normal">Post added successfully.</div>
                    </Toast>}
                    <form onSubmit={handleSubmit(onSubmitdata)} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <h3 className="font-bold">
                                    <div className="flex flex-wrap gap-2">
                                        Add Blog Post
                                    </div>
                                </h3>
                            </div>
                            <TextInput
                                {...register("title", { required: 'Field required', })}
                                id="title" type="text" icon={HiClipboardCheck} placeholder='Add title' shadow />
                        </div>
                        <div className="max-w-md">
                            <Select
                                {...register("category", { required: 'Field required', })}
                                id="category" icon={HiCollection}>
                                <option>Tech</option>
                                <option>Life</option>
                                <option>Hobby</option>
                            </Select>
                        </div>
                        <div>
                            <Textarea
                                {...register("desc", { required: 'Field required', })}
                                id="desc" type="text" placeholder='Descripiton' shadow />
                        </div>
                        <Button type="submit">Submit Post</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddBlogFormModal
