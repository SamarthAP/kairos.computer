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

  const GoogleDriveIcon = () => (
    <svg
      width="16"
      height="16"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 222"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="gd-a" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0" stopColor="#f6c338" />
          <stop offset=".522782398" stopColor="#ffd351" />
          <stop offset="1" stopColor="#f6c338" />
        </linearGradient>
        <linearGradient id="gd-b" x1="100%" x2="0%" y1="0%" y2="100%">
          <stop offset="0" stopColor="#286ee6" />
          <stop offset=".521046125" stopColor="#4286fb" />
          <stop offset="1" stopColor="#286ee6" />
        </linearGradient>
        <linearGradient
          id="gd-c"
          x1="65.289307%"
          x2="35.995483%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0" stopColor="#069b5a" />
          <stop offset=".531031222" stopColor="#11aa62" />
          <stop offset="1" stopColor="#069b5a" />
        </linearGradient>
      </defs>
      <path d="m83.3 0h89l83.7 144.3h-89.2z" fill="url(#gd-a)" />
      <path d="m256 144.3-44.6 77.1h-167l44.7-77.1z" fill="url(#gd-b)" />
      <path d="m44.4 221.4-44.4-77.1 83.3-144.3 44.7 77.3z" fill="url(#gd-c)" />
      {/* Opacity paths removed for simplicity, add back if needed */}
    </svg>
  );

  const GoogleCalendarIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <g transform="translate(3.75 3.75)">
          <path
            fill="#FFFFFF"
            d="M148.882,43.618l-47.368-5.263l-57.895,5.263L38.355,96.25l5.263,52.632l52.632,6.579l52.632-6.579 l5.263-53.947L148.882,43.618z"
          />
          <path
            fill="#1A73E8"
            d="M65.211,125.276c-3.934-2.658-6.658-6.539-8.145-11.671l9.132-3.763c0.829,3.158,2.276,5.605,4.342,7.342 c2.053,1.737,4.553,2.592,7.474,2.592c2.987,0,5.553-0.908,7.697-2.724s3.224-4.132,3.224-6.934c0-2.868-1.132-5.211-3.395-7.026 s-5.105-2.724-8.5-2.724h-5.276v-9.039H76.5c2.921,0,5.382-0.789,7.382-2.368c2-1.579,3-3.737,3-6.487 c0-2.447-0.895-4.395-2.684-5.855s-4.053-2.197-6.803-2.197c-2.684,0-4.816,0.711-6.395,2.145s-2.724,3.197-3.447,5.276 l-9.039-3.763c1.197-3.395,3.395-6.395,6.618-8.987c3.224-2.592,7.342-3.895,12.342-3.895c3.697,0,7.026,0.711,9.974,2.145 c2.947,1.434,5.263,3.421,6.934,5.947c1.671,2.539,2.5,5.382,2.5,8.539c0,3.224-0.776,5.947-2.329,8.184 c-1.553,2.237-3.461,3.947-5.724,5.145v0.539c2.987,1.25,5.421,3.158,7.342,5.724c1.908,2.566,2.868,5.632,2.868,9.211 s-0.908,6.776-2.724,9.579c-1.816,2.803-4.329,5.013-7.513,6.618c-3.197,1.605-6.789,2.421-10.776,2.421 C73.408,129.263,69.145,127.934,65.211,125.276z"
          />
          <path
            fill="#1A73E8"
            d="M121.25,79.961l-9.974,7.25l-5.013-7.605l17.987-12.974h6.895v61.197h-9.895L121.25,79.961z"
          />
          <path
            fill="#EA4335"
            d="M148.882,196.25l47.368-47.368l-23.684-10.526l-23.684,10.526l-10.526,23.684L148.882,196.25z"
          />
          <path
            fill="#34A853"
            d="M33.092,172.566l10.526,23.684h105.263v-47.368H43.618L33.092,172.566z"
          />
          <path
            fill="#4285F4"
            d="M12.039-3.75C3.316-3.75-3.75,3.316-3.75,12.039v136.842l23.684,10.526l23.684-10.526V43.618h105.263 l10.526-23.684L148.882-3.75H12.039z"
          />
          <path
            fill="#188038"
            d="M-3.75,148.882v31.579c0,8.724,7.066,15.789,15.789,15.789h31.579v-47.368H-3.75z"
          />
          <path
            fill="#FBBC04"
            d="M148.882,43.618v105.263h47.368V43.618l-23.684-10.526L148.882,43.618z"
          />
          <path
            fill="#1967D2"
            d="M196.25,43.618V12.039c0-8.724-7.066-15.789-15.789-15.789h-31.579v47.368H196.25z"
          />
        </g>
      </g>
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
      case "Google Drive":
        return <GoogleDriveIcon />;
      case "Google Calendar":
        return <GoogleCalendarIcon />;
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
