'use client';
import { useState, useContext } from 'react';
import { Button, Timeline, Spinner, Modal, Badge } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar, HiPrinter, HiOutlineCheck } from "react-icons/hi";
import {Datacontext} from '@/app/dashboard/datacontext';

const TimelineUser = ({ sessionuid }) => {
    const { objdata, loading } = useContext(Datacontext);
    const [openModal, setOpenModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState('');
    const { genid, datepicker, eventcat, eventmsg, eventname } = selectedRow;


    const handleEditClick = (item) => {
        //console.log(item);  
        setSelectedRow(item);
        console.log(selectedRow);
        setOpenModal(true);
    }

    const printClick = () => {
        window.print();
    }

    return (
        <div>
            {loading ?
                <div className="Banner-table">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Still Fetching data, kindly wait...
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <span className="like-icon"><Spinner aria-label="Extra large spinner example" size="xl" /></span>
                    </p>
                </div> :
                objdata.length > 0 ?
                    <Timeline>
                        {objdata.map((item, index) => (
                            item.sessionuid == sessionuid &&
                            <Timeline.Item key={index}>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content className="content-timeline">
                                    <Timeline.Time>{item.datepicker} ({item.eventcat}) </Timeline.Time>
                                    <Timeline.Title>{item.genid} </Timeline.Title>
                                    <Timeline.Body>
                                        {item.eventmsg}
                                    </Timeline.Body>
                                    <Button color="light" className="timeline-btn" onClick={() => handleEditClick(item)}>
                                        View Event {item.eventprime && <Badge className="topup" color="blue">Top Up</Badge>}
                                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </Timeline.Content>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                    :
                    <div className="Banner-table">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Not Found Data....
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className="like-icon">🤔</span>
                        </p>
                    </div>
            }

            <Modal show={openModal} onClose={() => setOpenModal(false)} id="section-to-print">
                <Modal.Header >
                    <strong className="modal-title-top">Event ID: {genid} - {eventcat}</strong>
                    <strong className="modal-title-view">Name: {eventname}  <Badge color="indigo">{datepicker}</Badge></strong>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Here's the full details of the booking kindly check below:
                            <span className="description-span">
                                {eventmsg}
                            </span>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="blue" onClick={() => setOpenModal(false)}>
                        <HiOutlineCheck className="mr-2 h-5 w-5" />
                        Done
                    </Button>
                    <Button onClick={() => printClick()}>
                        <HiPrinter className="mr-2 h-5 w-5" />
                        Print Booking
                    </Button>


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default TimelineUser
