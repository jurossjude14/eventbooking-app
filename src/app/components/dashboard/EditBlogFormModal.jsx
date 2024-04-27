'use client';

import { Button, Textarea, TextInput, Select, Modal, Toast,Label } from 'flowbite-react';
import { HiCollection, HiClipboardCheck, HiCheck } from 'react-icons/hi';
import { FaTelegramPlane } from "react-icons/fa";
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Blogcontext } from '@/app/dashboard/datacontext';


const EditBlogFormModal = ({ openModal, onCloseModal, selectedRow }) => {
    const { blogdata, setBlogdata, loading } = useContext(Blogcontext);
    const [sucessData, setSuccessData] = useState(false);
    const { register, handleSubmit, reset, formState: { isSubmitting }, } = useForm();

    const onSubmitdata = async (data) => {

        const singleUpObj = {...data, id:selectedRow.id} 
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${selectedRow.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ ...singleUpObj }),
            });
            if (res.ok) {
                setBlogdata(prevData => prevData.map(item =>(item.id === selectedRow.id ?{ ...item, ...singleUpObj } : item)));
                setSuccessData(true);

            } else {
                throw new Error("Failed to create a Post");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                onCloseModal();
                setSuccessData(false);
            }, 3000);
        }
    };

    return (
        <div>
            <Modal show={openModal} size="md" onClose={() => onCloseModal(reset())} popup>
                <Modal.Header />
                <Modal.Body>
                     {sucessData && <Toast>
                        <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                        <div className="pl-4 text-sm font-normal">Updated Successfully.</div>
                    </Toast>}
                    <form onSubmit={handleSubmit(onSubmitdata)} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <h3 className="font-bold">
                                    <div className="flex flex-wrap gap-2">
                                        Edit Blog Post
                                    </div>
                                </h3>
                            </div>
                            <TextInput 
                                disabled={isSubmitting}
                                {...register("title", { required: 'Field required', })}
                                id="title" type="text" icon={HiClipboardCheck} defaultValue={selectedRow.title} shadow />
                        </div>
                        <div className="max-w-md">
                            <Select defaultValue={selectedRow.category}
                                {...register("category", { required: 'Field required', disabled: isSubmitting})}
                                id="category" icon={HiCollection}>
                                <option>Tech</option>
                                <option>Life</option>
                                <option>Hobby</option>
                            </Select>
                        </div>
                        <div>
                            <Textarea
                                {...register("desc", { required: 'Field required', disabled: isSubmitting})}
                                id="desc" type="text"   defaultValue={selectedRow.desc}  required rows={10}  shadow/>
                        </div>
                        <Button type="submit" disabled={isSubmitting}>Update Post</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditBlogFormModal
