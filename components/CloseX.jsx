import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function CloseX() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
                <Link href="/"><h1 className="close-btn text-[55px] fixed right-0 -top-[10px] p-[15px]">x</h1></Link>
        </motion.div>
    )
}

export default CloseX