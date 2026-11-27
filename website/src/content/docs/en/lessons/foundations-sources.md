---
title: Sources and rebuild map
description: PDF pages, recording timestamps, rebuilt slides and editorial decisions.
---

The lecture was rebuilt from the [original 56-page PDF](https://github.com/volekerb/testing-lectures/blob/master/lectures_v_2021/ST.Lecture1.pdf) and [2021 recording](https://www.youtube.com/watch?v=elDiFlxI234). The table distinguishes preserved topics from new explanations.

## How the sources were reviewed

The complete Russian auto-generated transcript was read with timestamps; all 56 PDF pages were extracted and visually reviewed as rendered contact sheets. Two recording frames were checked against the PDF: the delivery pipeline around 1:02:30 and the status report around 2:06:34. This was not a continuous audiovisual viewing of the entire recording. Automatic captions contain transcription errors, especially tool names. Time links are navigation anchors, not exact quotation boundaries. No student introductions, personal details, or full transcript are republished. The PDF cover says 09.09.2020; the 2021 recording uses a later cover and substantially the same teaching sequence.

## Trace the rebuild

| PDF | Recording | New slides | Treatment |
| --- | --- | --- | --- |
| 1-3 | [21:15](https://www.youtube.com/watch?v=elDiFlxI234&t=1275s) | 1-4 | Preserve course purpose and eight questions; introductions become a short diagnostic. |
| 4-8 | [32:42](https://www.youtube.com/watch?v=elDiFlxI234&t=1962s) | 5-6 | Preserve the business-to-requirements story; add an explicit checkout rule. |
| 9-15 | [36:26](https://www.youtube.com/watch?v=elDiFlxI234&t=2186s) | 7-8 | Preserve roles and operation; explain role versus job title from the recording. |
| 16-20 | [47:59](https://www.youtube.com/watch?v=elDiFlxI234&t=2879s) | 9-13 | Preserve lifecycle models and early testing; distinguish iterative, incremental, spiral, Agile and Scrum. |
| 21 | [1:02:12](https://www.youtube.com/watch?v=elDiFlxI234&t=3732s) | 14-15 | Preserve pipeline and production feedback; add observable release and data safeguards. |
| 22-25 | [1:09:15](https://www.youtube.com/watch?v=elDiFlxI234&t=4155s) | 4, 16-17 | Preserve testing definition, activities, skills, specializations; include needs beyond written specifications. |
| 26-30 | [1:30:25](https://www.youtube.com/watch?v=elDiFlxI234&t=5425s) | 18-19 | Preserve environment ownership; expand reproducible data, isolation and parallel execution. |
| 31 | [1:36:19](https://www.youtube.com/watch?v=elDiFlxI234&t=5779s) | 20-24 | Replace crowded taxonomy with independent axes and explicit system boundaries. |
| 32-34 | [1:42:15](https://www.youtube.com/watch?v=elDiFlxI234&t=6135s) | 25-26 | Preserve planning, entry/exit criteria and historical IEEE 829 example; add a worked lean plan and risk priority. |
| 35-38 | [1:45:54](https://www.youtube.com/watch?v=elDiFlxI234&t=6354s) | 27, 45 | Preserve case structure, positive/negative cases and original 20-case homework. |
| 39 | [1:49:40](https://www.youtube.com/watch?v=elDiFlxI234&t=6580s) | 28-32 | Expand the original list with worked equivalence classes, boundaries, decision table, pairwise and exploratory examples. |
| 40-42 | [1:52:59](https://www.youtube.com/watch?v=elDiFlxI234&t=6779s) | 19, 34-35 | Preserve grouping and execution; make state collisions and flaky outcomes explicit. |
| 43-46 | [1:59:49](https://www.youtube.com/watch?v=elDiFlxI234&t=7189s) | 36-38 | Preserve report, fix and retest; distinguish severity/priority and confirmation/regression. |
| 47-48 | [2:04:26](https://www.youtube.com/watch?v=elDiFlxI234&t=7466s) | 33 | Explain when a checklist is appropriate rather than treating it as a shortcut caused by laziness. |
| 49-52 | [2:05:07](https://www.youtube.com/watch?v=elDiFlxI234&t=7507s) | 39-40 | Preserve audience-specific reporting; replace “always green means removable” with risk/assertion/redundancy review. |
| 53-54 | [2:10:07](https://www.youtube.com/watch?v=elDiFlxI234&t=7807s) | 41 | Preserve tool categories; do not present historical product names or a proposed demo as current delivered content. |
| 55 | [2:14:31](https://www.youtube.com/watch?v=elDiFlxI234&t=8071s) | 35, 42-43 | Preserve browsers, scale, data and resilience discussion; clarify browser engines and controlled fault injection. |
| 56 | [2:19:45](https://www.youtube.com/watch?v=elDiFlxI234&t=8385s) | 44, 48 | Preserve one evolving application and the UI/backend/mobile course horizon. Later modules stay planned. |
| Recording only | [2:21:34](https://www.youtube.com/watch?v=elDiFlxI234&t=8494s) | 21-22 | Expand the integration/E2E question with a backend-only journey and stated real/fake boundaries. |
| New | Supporting lab | 29, 46 | Registration was created for the pilot, not recovered from the source. Retained as a 35-minute boundary/regression exercise. |

Registration is a newly authored supporting exercise. The main 20-case assignment comes from PDF page 37. The estimate of two 75-minute sessions and a separate 35-minute lab needs classroom validation. Further editorial decisions and reference checks are in the [repository source map](https://github.com/volekerb/testing-lectures/blob/master/instructor/lecture-01-source-map.md).

[Return to the lecture](../foundations/).
