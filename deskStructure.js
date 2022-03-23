import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Home')
        .items([
            S.listItem()
                .title('Content')
                .child(                
                    S.list()
                        .title('Content')
                        .items([
                            S.listItem()
                                .title('Plants')
                                .child(S.documentTypeList('plants').title('Plants')),
                            S.listItem()
                                .title('Portfolio')
                                .child(S.documentTypeList('portfolio').title('Projects')),
                        ])
                ),
            S.listItem()
                .title('Media')
                .child(
                    S.list()
                        .title('Media')
                        .items([
                            S.listItem()
                                .title('Background Images')
                                .child(S.documentTypeList('backgroundImages').title('Images')),
                        ])

                )
        ])
       