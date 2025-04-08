import React from "react";
import { motion } from "framer-motion";

interface WorkflowDetailsProps {
  workflowDetails: {
    name: string;
    summary: string;
    inputs: string[];
    integrations: string[];
  };
}

export default function WorkflowDetails({
  workflowDetails,
}: WorkflowDetailsProps) {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  // Animation variants for list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };

  // Simple SVG icons for services
  const GoogleSheetsIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#43a047"
        d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"
      />
      <path fill="#c8e6c9" d="M40 13L30 13 30 3z" />
      <path fill="#2e7d32" d="M30 13L40 23 40 13z" />
      <path
        fill="#e8f5e9"
        d="M31,23H17h-2v2v2v2v2v2v2v2h18v-2v-2v-2v-2v-2v-2v-2H31z M17,25h4v2h-4V25z M17,29h4v2h-4V29z M17,33h4v2h-4V33z M31,35h-8v-2h8V35z M31,31h-8v-2h8V31z M31,27h-8v-2h8V27z"
      />
    </svg>
  );

  const GmailIcon = () => (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 92 92"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m21.6354 66h8.4828v-20.6008l-12.1182-9.0887v26.0541c0 2.0116 1.6299 3.6354 3.6354 3.6354z"
        fill="#4285f4"
      />
      <path
        d="m59.2031 66h8.4827c2.0117 0 3.6355-1.6298 3.6355-3.6354v-26.0541l-12.1182 9.0887"
        fill="#34a853"
      />
      <path
        d="m59.2031 29.6458v15.7536l12.1182-9.0886v-4.8473c0-4.4959-5.1321-7.0588-8.7251-4.3626"
        fill="#fbbc04"
      />
      <path
        d="m30.1172 45.3991v-15.7536l14.5418 10.9064 14.5418-10.9064v15.7536l-14.5418 10.9064"
        fill="#ea4335"
      />
      <path
        d="m18 31.4635v4.8473l12.1182 9.0886v-15.7536l-3.3931-2.5449c-3.5991-2.6962-8.7251-.1333-8.7251 4.3626z"
        fill="#c5221f"
      />
    </svg>
  );

  // Generic icon for fallback
  const GenericIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-stone-400"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h.01" />
      <path d="M12 7h.01" />
      <path d="M17 7h.01" />
      <path d="M7 12h.01" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 17h.01" />
      <path d="M12 17h.01" />
      <path d="M17 17h.01" />
    </svg>
  );

  const getIntegrationIcon = (name: string) => {
    switch (name) {
      case "Google Sheets":
        return <GoogleSheetsIcon />;
      case "Gmail":
        return <GmailIcon />;
      default:
        return <GenericIcon />;
    }
  };

  return (
    <motion.div
      className="flex flex-col h-full w-full max-w-full sm:max-w-[80%] md:max-w-[70%] mx-auto px-3 py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Workflow Header */}
      <motion.div className="mb-4" variants={itemVariants}>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-bold text-amber-500 mb-1">
              {workflowDetails.name}
            </h1>
            <p className="text-xs text-stone-400">{workflowDetails.summary}</p>
          </div>
          <motion.span
            className="flex items-center shrink-0 gap-1 rounded-sm bg-stone-800 px-2 py-1 text-xs font-medium text-stone-300 hover:bg-stone-700 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
            View runs
          </motion.span>
        </div>
      </motion.div>

      {/* Required Inputs Section */}
      <motion.div className="mb-4" variants={itemVariants}>
        <h2 className="mb-2 text-xs font-medium tracking-wider text-stone-500">
          Here&apos;s what I need from you
        </h2>
        <motion.div
          className="space-y-2"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {workflowDetails.inputs.map((input, index) => (
            <motion.div
              key={input}
              className="space-y-1"
              variants={listItemVariants}
              custom={index}
            >
              <label className="text-xs font-medium text-stone-300">
                {input}
              </label>
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder={`Please provide the ${input.toLowerCase()}`}
                  className="w-full rounded-sm border border-stone-700 bg-stone-800 px-2 py-1.5 text-xs text-stone-200 shadow-sm transition-colors placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Integrations Section */}
      <motion.div className="mb-4" variants={itemVariants}>
        <h2 className="mb-2 text-xs font-medium tracking-wider text-stone-500">
          I&apos;ll need to access these services
        </h2>
        <motion.div
          className="divide-y divide-stone-800"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {workflowDetails.integrations.map((integration, index) => (
            <motion.div
              key={integration}
              className="flex items-center justify-between py-2"
              variants={listItemVariants}
              custom={index}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex h-6 w-6 items-center justify-center rounded-sm bg-stone-800"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  {getIntegrationIcon(integration)}
                </motion.div>
                <span className="text-xs font-medium text-stone-300">
                  {integration}
                </span>
              </div>
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.2 }}
              >
                <span className="text-[10px] text-amber-500">Connected</span>
                <motion.div
                  className="h-1.5 w-1.5 rounded-full bg-amber-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Activity Hint */}
      {/* <motion.div
        className="mb-4 mt-4 text-center"
        variants={itemVariants}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <div className="rounded-sm bg-stone-900 py-2 border border-stone-800">
          <p className="text-[10px] text-stone-400">
            <span className="mr-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-stone-800 text-[8px]">
              ?
            </span>
            You'll be able to track all your workflow runs in the{" "}
            <span className="font-medium text-amber-500 cursor-pointer hover:underline">
              runs history
            </span>
          </p>
        </div>
      </motion.div> */}

      {/* Action Button */}
      <motion.div
        className="mt-6 flex justify-center"
        variants={itemVariants}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          className="relative overflow-hidden rounded-sm bg-stone-800 px-1.5 py-1.5 shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-7 items-center gap-1.5 rounded-sm bg-amber-600 hover:bg-amber-500 px-3 py-1 text-xs font-medium text-stone-950 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Run automatically
            </motion.button>

            <div className="h-5 w-px bg-stone-700"></div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-7 items-center gap-1.5 rounded-sm bg-stone-700 hover:bg-stone-600 px-3 py-1 text-xs font-medium text-stone-200 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Run now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
