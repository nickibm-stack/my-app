import { StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow, StructuredListWrapper } from "@carbon/react"
import { useCaseList } from "../data"



export function QABox() {
    return (
        <StructuredListWrapper
        >
            <StructuredListHead>
                <StructuredListRow head>
                    <StructuredListCell head>
                        Domain/ Task
                    </StructuredListCell>
                    <StructuredListCell head>
                        Description
                    </StructuredListCell>
                </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>

                {
                    useCaseList.map(item => {
                        return (

                            <StructuredListRow key={item.key}>
                                <StructuredListCell noWrap>
                                    {item.label}
                                </StructuredListCell>
                                <StructuredListCell>
                                    {item.description}
                                </StructuredListCell>
                            </StructuredListRow>


                        )
                    })

                }

            </StructuredListBody>
        </StructuredListWrapper>
    )
}