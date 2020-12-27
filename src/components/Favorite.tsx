interface Props {
  podcasts: string[];
}

const Favorite: React.FC<Props> = ({ podcasts }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {podcasts.length > 0 ? (
            podcasts.map((podcast) => (
              <tr key={JSON.parse(podcast).trackId} >
                <td>{JSON.parse(podcast).artistName}</td>
                <td>{JSON.parse(podcast).collectionName}</td>
                <td>
                  <button type="button" className="button muted-button">
                    Edit
                  </button>
                  <button type="button" className="button muted-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No favorite podcast</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

export default Favorite;
