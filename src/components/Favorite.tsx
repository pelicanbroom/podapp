interface Props {
  podcasts: [any];
}

const Favorite: React.FC<Props> = ({ props }) => {
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
          {props.length > 0 ? (
            props.map((podcast) => (
              <tr key={podcast.trackId} >
                <td>{podcast.artistName}</td>
                <td>{podcast.collectionName}</td>
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
