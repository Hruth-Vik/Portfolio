export const projects = [
  {
    title: 'Data Processing Pipeline',
    subtitle: 'Scala, Spark, Hadoop, ETL',
    period: 'Sept 2025 – Sept 2025',
    description: [
      'Developed a data pipeline to process and manage large-scale event data with efficient ETL transformations.',
      'Implemented pre- and post-processing checks, including schema validation, null checks, and data type verification to ensure data integrity.',
      'Automated validation workflows to enhance reliability and accuracy of data processing.',
      'Deployed and tested the pipeline across environments to ensure stability and production readiness.'
    ],
    image: '/images/data-pipeline.png',
    tags: ['Scala', 'Apache Spark', 'Hadoop', 'ETL'],
    github: null,
    demo: null,
  },
  {
    title: 'Ola Ride Report',
    subtitle: 'SQL, Power BI',
    period: 'Jan 2025 – Apr 2025',
    description: [
      'Designed an end-to-end Power BI dashboard using SQL-processed ride data to analyze booking trends, vehicle performance, revenue, and customer-driver ratings.',
      'Implemented Dynamic Row-Level Security (RLS) to enable secure, role-based data filtering and enhance user-specific insights within the report.'
    ],
    image: '/images/ola-ride-report.png',
    tags: ['SQL', 'Power BI', 'RLS'],
    github: 'https://github.com/Hruth-Vik/OlaRideReport',
    demo: null,
  },
  {
    title: 'Tokyo Olympics Data Engineering Pipeline',
    subtitle: 'Azure Data Factory, Azure Databricks',
    period: 'May 2025 – July 2025',
    description: [
      'Developed a scalable ETL pipeline using Azure Data Factory to extract and load Olympic CSV datasets from GitHub into Azure Data Lake Storage Gen2.',
      'Transformed and validated datasets in Azure Databricks using PySpark, applying schema inference, data type casting, and partitioning.',
      'Prepared transformed datasets for downstream analytics and reporting in Azure Synapse Analytics and Power BI.'
    ],
    image: '/images/tokyo-olympics.png',
    tags: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'ADLS Gen2'],
    github: 'https://github.com/Hruth-Vik/Tokyo-olympics-Analysis',
    demo: null,
  },
];
