---
sidebar_position: 1
---

# Source to Target testing

## For Historical Load, Incremental Load & Regression

1. I created Test Scripts in SQL and Python to automate the testing of tables spanning from Source to Target, including the following stages: SFDC to PreLanding, PreLanding to Landing, Landing to Landing Merge, Landing Merge to Unification, Unification to Refinement, and Refinement to Publish.

i. Data integration for SFDC occurs through a CSV file, and data integration for PreLanding is accomplished via Amazon S3. These processes constitute data pipelines.

ii. I conducted Count and Minus Validation checks for all stages to identify the presence of any additional or missing columns.

iii. In Unification testing, I extracted columns from STTM and subsequently passed them through the Refinement and Publish layers to validate the presence of all business-approved columns.

iv. I also verified Primary Key and Foreign Key relationships from the Unification to Target layer.

v. I conducted thorough checks for null columns.

vi. I performed Audit column checks to reconcile the audit data with data uploaded in PostgreSQL through tools like Dbeaver.

vii. I have checked masking and non masking columns using dev provided jsons for multiple tables.








