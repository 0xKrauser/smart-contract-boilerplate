# SPDX-FileCopyrightText: 2023 Johannes Krauser III <krauser@hey.com>
#
# SPDX-License-Identifier: CC0-1.0

FROM gitpod/workspace-full:2023-05-08-21-16-55

# Install custom tools, runtime, etc.
RUN curl -L https://foundry.paradigm.xyz | bash
RUN source /home/gitpod/.bashrc
RUN foundryup
RUN python3 -m pip install reuse