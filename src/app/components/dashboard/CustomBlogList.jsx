'use client';

import { useState, useEffect, useContext } from 'react';
import { Button, Spinner, Modal } from "flowbite-react";
import { HiDocumentAdd, HiDocumentSearch , HiPencilAlt , HiUserCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { Blogcontext } from '@/app/dashboard/datacontext';
import AddBlogFormModal from './AddBlogFormModal';
import EditBlogFormModal from './EditBlogFormModal';

const CustomBlogList = ({ sessionid }) => {

    const { blogdata, setBlogdata, loading } = useContext(Blogcontext);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, seteditOpenModal] = useState(false);
    const [opendelModal, setOpenDelModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getBlog = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/blog/', {
                cache: "no-store",
            });
            if (!res.ok) {
                throw new Error("Failed to fetch topics");
            }
            const resDatalist = res.json();
            setIsLoading(false);
            return resDatalist;

        } catch (error) {
            console.log("Error loading topics: ", error);
        }
    };

    const getfetch = async () => {
        const { data } = await getBlog();
        setBlogdata(data);
    }

    useEffect(() => {
        getfetch();
    }, []); // Run only once (optional)


    const delData = async (id) => {
        try {
            const res = fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "DELETE",
            });
            if (res) {
                setBlogdata(blogdata.filter((item) => item.id !== id));
                setOpenDelModal(false)
            }
            else {
                throw new Error("Failed to create a Post");
            }

        } catch (error) {
            console.log(error);
        }
    }



    const openFormPopup = () => {
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
        seteditOpenModal(false);
    };


    const handleEditClick = (item) => {
        setSelectedRow(item);
        //console.log(selectedRow);
        seteditOpenModal(true);
    };

    return (
        <>
            <div className="top-heading-blog">
                <AddBlogFormModal openModal={openModal} onCloseModal={onCloseModal} />
                {selectedRow && <EditBlogFormModal openModal={openEditModal}  onCloseModal={onCloseModal} selectedRow={selectedRow} /> }
                <div className="mb-2 block">
                    <div className="flex flex-wrap gap-2 heading-blog-flex">
                        <h3 className="font-bold">Blog | Latest Posts </h3>
                        <Button size="sm" color="blue" onClick={() => openFormPopup()}>
                            <HiDocumentAdd className="h-4 w-4" />  Add Post
                        </Button>
                    </div>
                </div>
            </div>
            <div className="top-blog-posts">
                <div className="mb-2 block">
                    {isLoading &&
                        <div className="text-center">
                            <h2>Fetching Data... <Spinner aria-label="Extra large spinner example" size="xl" /></h2>
                        </div>
                    }
                    <div className="flex flex-wrap gap-2 grid-blog-flex">
                        {blogdata.map((item, index) => (
                            <article key={index} className="blog-post-parent" >
                                <span className="btn-remove-cont">
                                    <button className="btn-remove-elem" onClick={() => setOpenDelModal(true)}>X</button>
                                </span>
                                <span className="title">
                                    <strong>{item.title}</strong>
                                </span>
                                <div className="category">
                                    <span>{item.category}</span>
                                </div>
                                <div className="desc">
                                    {item.desc}
                                </div>
                                <div className="btn-cont">
                                    <Button color="gray" size="xs" onClick={()=> handleEditClick(item)}>
                                        <HiPencilAlt className="mr-3 h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button size="xs" className="btn-href">
                                        <a href={`/articles/${item.id}`} target="_blank">
                                            <HiDocumentSearch  className="mr-3 h-4 w-4" />
                                             See Post
                                        </a>    
                                    </Button>
                                </div>
                                <Modal show={opendelModal} size="md" onClose={() => setOpenDelModal(false)} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                        <div className="text-center">
                                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                Are you sure you want to delete this Post?
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button color="failure" onClick={() =>  delData(item.id)}>
                                                    {"Yes"}
                                                </Button>
                                                <Button color="gray" onClick={() => setOpenDelModal(false)}>
                                                    No
                                                </Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </article>

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomBlogList
