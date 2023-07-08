# SPDX-FileCopyrightText: 2023 Johannes Krauser III <krauser@hey.com>
#
# SPDX-License-Identifier: CC0-1.0

FROM gitpod/workspace-full:2023-05-08-21-16-55

RUN curl -L https://foundry.paradigm.xyz | bash
RUN export PATH="$PATH:/home/gitpod/.foundry/bin"; foundryup
RUN python3 -m pip install reuse