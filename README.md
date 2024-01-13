# Context-Sensitive Application

## Overview

Developed as part of the [Context Sensitive Systems lecture series at KIT](https://pcs.tm.kit.edu/english/444_446.php),
this application uses machine learning to demonstrate the practical applications of context recognition in mobile
devices. It effectively utilizes smartphone sensor data to predict user actions.

## Components

### Record App

- Collects accelerometer data from smartphones for three activities:
    - **Reading**: The phone is held stationary, typically in a position for reading.
    - **Chatting**: Similar orientation to reading, but with intermittent typing.
    - **Calling**: The phone is held close to the ear, simulating a call.
- Data is uploaded to the edge-ml cloud, demonstrating real-world data collection in context-sensitive systems.

### Python Data Analysis with ML Pipeline (Notebooks)

- The project includes Jupyter Notebooks covering the full spectrum of a ML pipeline:
    - data cleaning → feature extraction → feature selection → model selection → hyperparameter optimization →
      deployment

### sayMyActionApp

- A web application that uses the developed model to identify and predict the user's current action based on sensor
  data.
- Test the app [here](https://codesandbox.io/s/saymyactionapp-6dx84s?file=/index.html).

## Getting Started

- **Setting Up the Environment**:
    - Use the provided `env.yml` file to create a conda environment with all required dependencies.
- **Running the Applications**:
    - For the Record App, follow the instructions in `RecordApp/README.md`.
    - The sayMyActionApp can be tested directly from the provided CodeSandbox link.
- **Accessing the Notebooks**:
    - The Jupyter Notebooks are located in the `notebooks` directory. They can be run to replicate the data analysis and
      model training processes.

**Note:** The application has been tested only on iOS devices.