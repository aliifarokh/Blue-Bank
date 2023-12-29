import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Dana from "../assets/font/Dana/fa/woff/DanaFaNum-Regular.woff"
import { accordions } from '../constants';

const ControlledAccordions = () => {
    const [openStates, setOpenStates] = React.useState(accordions.map(() => false));

    const handleAccordionClick = (index) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <>
            {accordions.map((item, index) => (
                <Accordion
                    key={item.id}
                    expanded={openStates[index]}
                    sx={{
                        bgcolor: "#fbfafb",
                        boxShadow: "0",
                        boxSizing: "border-box",
                        borderBottom: "1px solid #e8e8ef",
                        
                    }}
                    className='w-full md:w-[80%] border-none before:w-0'
                    dir='rtl'
                >
                    <AccordionSummary
                        dir='rtl'
                        onClick={() => handleAccordionClick(index)}
                        className='flex flex-row justify-between items-center'
                    >
                        <Typography
                            variant=''
                            sx={{
                                fontFamily: Dana,
                                fontSize: "18px"
                            }}
                            className={`flex items-center font-Dana duration-300 ${openStates[index] ? "text-[#3094ea]" : "text-[#737789]"}`}
                        >
                            {item.title}
                        </Typography>
                        <div className='flex flex-1 justify-end'>
                            <div
                                className={`flex relative w-[40px] before:content-["?"] before:text-[30px] before:flex before:absolute before:top-[1px] text-[28px] h-[40px] rounded-full justify-center items-center duration-300 border-[2px] border-[#3094ea] ${
                                    openStates[index] ? "bg-[white] text-[#3094ea]" : "bg-[#3094ea] text-white"
                                }`}
                            />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant=''
                            sx={{
                                fontFamily: Dana,
                                fontSize: "14px",
                                color: "#737789"
                            }}
                        >
                            {item.text}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            <div dir='rtl' className='flex w-full mt-10 md:w-[80%] justify-end'>
                <a className='text-[#007bff] text-[17px] hover:text-[#0056b3]' href="">سوالات بیشتر ...</a>
            </div>
        </>
    );
};

export default ControlledAccordions;
