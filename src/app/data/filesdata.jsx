export const filesList = [
  {
    id: 0,
    imageLink: null,
    isFolder: true,
    fileName: "folder1",
    parentId: null,
    children: [
      {
        id: 0,
        imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
        isFolder: false,
        fileName: "image.png",
        parentId: 0,
      },
      {
        id: 1,
        imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
        isFolder: false,
        fileName: "image1.png",
        parentId: 0,
      },
      {
        id: 2,
        imageLink: null,
        isFolder: true,
        fileName: "folder2",
        parentId: 0,
        children: [
          {
            id: 0,
            imageLink:
              "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
            isFolder: false,
            fileName: "image.png",
            parentId: 2,
          },
        ],
      },
      {
        id: 3,
        imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
        isFolder: false,
        fileName: "image2.png",
        parentId: 0,
      },
    ],
  },
  {
    id: 1,
    imageLink: null,
    isFolder: true,
    fileName: "folder2",
    parentId: null,
    children: [
      {
        id: 0,
        imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
        isFolder: false,
        fileName: "image.png",
        parentId: 1,
      },
      {
        id: 1,
        imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
        isFolder: false,
        fileName: "image1.png",
        parentId: 1,
      },
      {
        id: 2,
        imageLink: null,
        isFolder: true,
        fileName: "folder3",
        parentId: 1,
        children: [
          {
            id: 0,
            imageLink:
              "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
            isFolder: false,
            fileName: "image.png",
            parentId: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    imageLink: "https://cdn-icons-png.flaticon.com/512/6676/6676023.png",
    isFolder: false,
    fileName: "image.png",
    parentId: null,
  },
];
